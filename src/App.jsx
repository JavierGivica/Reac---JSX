import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';
import ProductGallery from './ProductGallery';
import TablaEstudiantes from './TablaEstudiantes';

const App = () => {
    return (
        <div style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundColor: '#0f3460',
            minHeight: '100vh',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Header />

            <main style={{
                flex: 1,
                padding: '20px',
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%'
            }}>
                <section style={{
                    backgroundColor: 'rgba(26, 26, 46, 0.8)',
                    padding: '30px',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    marginBottom: '2rem'
                }}>
                    <Profile />
                </section>

                <ProductGallery />

                <TablaEstudiantes />
                <br></br>
            </main>

            <Footer />
        </div>
    );
};

export default App;
