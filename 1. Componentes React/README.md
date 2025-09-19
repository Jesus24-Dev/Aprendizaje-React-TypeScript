# **Mini “Perfil de Usuario” Interactivo**

**Objetivo:**

Construir una pequeña aplicación en React + TypeScript que muestre un perfil de usuario básico con componentes bien tipados, y permita actualizar datos de forma controlada.

---

### **Requisitos técnicos**

1. **Estructura inicial (Tema 1)**
    - Crea el proyecto con TypeScript (`CRA`, `Vite` o `Next`, a tu gusto).
    - Organiza una estructura mínima de carpetas: `components/`, `types/`, `pages/`.
2. **Componente de Perfil (Tema 2 + 3)**
    - Crea un componente `UserCard` que reciba `props` tipadas con `interface` (nombre, edad, email, ocupación).
    - Renderiza esa información usando **TSX** y valida bien que las props son obligatorias o opcionales según tu criterio.
3. **Estado y actualización (Tema 3)**
    - Usa `useState` para manejar si el perfil está en **modo visualización** o **modo edición**.
    - En modo edición, renderiza un formulario (inputs controlados) que permita actualizar los datos del perfil.
    - Al guardar, actualiza el estado y vuelve al modo visualización.
4. **Componentes adicionales (Tema 3)**
    - Separa el formulario en un componente propio `UserForm` con sus props tipadas.
    - Usa al menos un `useEffect` para hacer algo secundario, por ejemplo:
        - Mostrar en consola cada vez que cambie el nombre.
        - O simular que se guarda en localStorage.
