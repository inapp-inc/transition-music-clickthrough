import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  getPersona,
  personas,
  type Persona,
  type PersonaId,
} from '../data/personas';

const STORAGE_KEY = 'aria-demo-persona';

function getInitialPersonaId(): PersonaId {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored && personas.some((p) => p.id === stored)) {
      return stored as PersonaId;
    }
  } catch {
    // sessionStorage unavailable
  }
  return personas[0].id;
}

interface PersonaContextValue {
  currentPersona: Persona;
  setPersonaId: (id: PersonaId) => void;
}

const PersonaContext = createContext<PersonaContextValue | null>(null);

export function PersonaProvider({ children }: { children: ReactNode }) {
  const [personaId, setPersonaIdState] = useState<PersonaId>(getInitialPersonaId);

  const setPersonaId = useCallback((id: PersonaId) => {
    setPersonaIdState(id);
    try {
      sessionStorage.setItem(STORAGE_KEY, id);
    } catch {
      // sessionStorage unavailable
    }
  }, []);

  const value = useMemo(
    () => ({
      currentPersona: getPersona(personaId),
      setPersonaId,
    }),
    [personaId, setPersonaId],
  );

  return (
    <PersonaContext.Provider value={value}>{children}</PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
}

export { STORAGE_KEY as PERSONA_STORAGE_KEY };
