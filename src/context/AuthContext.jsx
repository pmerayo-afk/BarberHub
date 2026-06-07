import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Rehydrate session from localStorage on first load
  useEffect(() => {
    const stored = localStorage.getItem('barberhub_user')
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch {
        localStorage.removeItem('barberhub_user')
      }
    }
    setLoading(false)
  }, [])

  // Persist user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('barberhub_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('barberhub_user')
    }
  }, [user])

  /** Register with email + password */
  const register = async ({ name, email, password }) => {
    // Read existing users
    const existing = JSON.parse(localStorage.getItem('barberhub_users') || '[]')

    if (existing.find(u => u.email === email)) {
      throw new Error('Ya existe una cuenta con ese correo.')
    }

    const newUser = {
      id: crypto.randomUUID(),
      name,
      email,
      // NOTE: In a real app passwords must be hashed server-side.
      // Here we store them only for demo purposes (no backend).
      password,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=d4a056&color=111&bold=true`,
      provider: 'email',
      createdAt: new Date().toISOString(),
    }

    localStorage.setItem('barberhub_users', JSON.stringify([...existing, newUser]))

    // Auto-login after register
    const { password: _, ...safeUser } = newUser
    setUser(safeUser)
    return safeUser
  }

  /** Login with email + password */
  const login = async ({ email, password }) => {
    const existing = JSON.parse(localStorage.getItem('barberhub_users') || '[]')
    const found = existing.find(u => u.email === email && u.password === password)

    if (!found) {
      throw new Error('Correo o contraseña incorrectos.')
    }

    const { password: _, ...safeUser } = found
    setUser(safeUser)
    return safeUser
  }

  /** Login / Register with Google (simulated OAuth popup) */
  const loginWithGoogle = async () => {
    // In production replace this with a real Google OAuth flow
    // e.g. firebase.auth().signInWithPopup(googleProvider)
    // or window.location to your backend /auth/google endpoint.

    // Simulation: ask for a Google account name via a small popup-like prompt
    const googleName = window.prompt(
      '🔐 Simulación de Google OAuth\n\nEscribe el nombre que aparece en tu cuenta Google:',
      'Usuario de Google'
    )
    if (!googleName) throw new Error('Inicio de sesión cancelado.')

    const googleEmail = `${googleName.toLowerCase().replace(/\s+/g, '.')}.google@gmail.com`

    const existing = JSON.parse(localStorage.getItem('barberhub_users') || '[]')
    let found = existing.find(u => u.email === googleEmail)

    if (!found) {
      // Auto-register on first Google login
      found = {
        id: crypto.randomUUID(),
        name: googleName,
        email: googleEmail,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(googleName)}&background=d4a056&color=111&bold=true`,
        provider: 'google',
        createdAt: new Date().toISOString(),
      }
      localStorage.setItem('barberhub_users', JSON.stringify([...existing, found]))
    }

    setUser(found)
    return found
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, loading, register, login, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
