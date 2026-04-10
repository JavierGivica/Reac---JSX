import EstudianteRow from './EstudianteRow';

const TablaEstudiantes = () => {
    // Array de estudiantes (ejemplo basado en el ejercicio)
    const estudiantes = [
        { id: 1, nombre: "Juan Pérez", edad: 20, curso: "React", nota: 8.5 },
        { id: 2, nombre: "Ana García", edad: 22, curso: "JavaScript", nota: 4.2 },
        { id: 3, nombre: "Luis Martínez", edad: 19, curso: "HTML5/CSS3", nota: 7.0 },
        { id: 4, nombre: "Marta Sánchez", edad: 21, curso: "Node.js", nota: 3.5 },
        { id: 5, nombre: "Carlos Ruiz", edad: 23, curso: "React", nota: 9.2 }
    ];

    return (
        <div style={{
            backgroundColor: 'rgba(26, 26, 46, 0.6)',
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '2rem'
        }}>
            <h2 style={{ 
                marginBottom: '1.5rem', 
                color: '#e2e8f0',
                borderBottom: '2px solid #3b82f6',
                display: 'inline-block',
                paddingBottom: '5px'
            }}>
                Listado de Estudiantes
            </h2>
            
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                color: '#cbd5e1',
                textAlign: 'left'
            }}>
                <thead style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                    <tr>
                        <th style={{ padding: '12px 15px', color: '#94a3b8' }}>Nombre</th>
                        <th style={{ padding: '12px 15px', color: '#94a3b8' }}>Edad</th>
                        <th style={{ padding: '12px 15px', color: '#94a3b8' }}>Curso</th>
                        <th style={{ padding: '12px 15px', color: '#94a3b8' }}>Nota</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiantes.map(estudiante => (
                        <EstudianteRow 
                            key={estudiante.id}
                            nombre={estudiante.nombre}
                            edad={estudiante.edad}
                            curso={estudiante.curso}
                            nota={estudiante.nota}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaEstudiantes;
