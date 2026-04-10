const EstudianteRow = ({ nombre, edad, curso, nota }) => {
    const isAprovado = nota >= 5;
    
    return (
        <tr style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'background-color 0.3s'
        }}>
            <td style={{ padding: '12px 15px' }}>{nombre}</td>
            <td style={{ padding: '12px 15px' }}>{edad}</td>
            <td style={{ padding: '12px 15px' }}>{curso}</td>
            <td style={{ 
                padding: '12px 15px',
                color: isAprovado ? '#4ade80' : '#f87171',
                fontWeight: 'bold'
            }}>
                {nota.toFixed(1)}
            </td>
        </tr>
    );
};

export default EstudianteRow;
