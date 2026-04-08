const Header = () => {
    return (
        <header style={{
            padding: '20px',
            backgroundColor: '#1a1a2e',
            color: '#e94560',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            borderRadius: '0 0 16px 16px',
            margin: '0 auto 20px',
            maxWidth: '800px'
        }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>MyReactApp</div>
        </header>
    );
};

export default Header;
