import ErrorPage from 'next/error'

const withError = (Component) => class extends React.Component {
    static async getInitialProps(ctx) {
        const props = await Component.getInitialProps(ctx)
        const { statusCode } = ctx.res
        return { statusCode, ...props }
    }

    render() {
        const { statusCode } = this.props
        if (statusCode && statusCode !== 200) {
            return <ErrorPage statusCode={statusCode} />
        }
        return <Component {...this.props} />
    }
}

class Example extends React.Component {
    static async getInitialProps(ctx) {
        if (error) { // define your app error logic here
            ctx.res.statusCode = 404;
        }
        return { /* ... */ }
    }

    render() {
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }
}

export default withError(Example);
