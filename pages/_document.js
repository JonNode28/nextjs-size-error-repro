import Document, { Head, Main, NextScript } from 'next/document';
import { Auth } from 'aws-amplify';

Auth.configure({});

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps
    };
  }

  render() {
    const { userId } = this.props;

    return (
      <html>
      <Head />
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    );
  }
}

export default MainDocument;
