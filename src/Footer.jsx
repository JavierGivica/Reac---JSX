const Footer = () => {
    return (
        <footer style={{
            padding: '10px',
            backgroundColor: '#16213e',
            color: '#95afc0',
            textAlign: 'center',
            fontSize: '14px',
            borderTop: '2px solid #533483',
            position: 'fixed',
            bottom: '0',
            left: '0',
            width: '100%',
            zIndex: 1000
        }}>
            <p>&copy; {new Date().getFullYear()} - Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
