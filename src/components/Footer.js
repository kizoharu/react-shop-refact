function Footer() {
    return (
        <footer className='page-footer light-blue lighten-3'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a className='grey-text text-lighten-4 right' href='#!'>
                        Link
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
