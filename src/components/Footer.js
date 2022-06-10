function Footer() {
    return (
        <footer className='page-footer light-blue lighten-3'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a 
                        className='grey-text text-lighten-4 right' 
                        href='https://github.com/kizoharu/react-shop-refact/settings/pages' 
                        rel="noreferrer" 
                        target="_blank"
                    >
                        Link
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
