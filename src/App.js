import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import AppHeader from "./components/common/header";
import AppHome from "./views/home";
import FooterApp from "./components/Home/footer";
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <FooterApp />
      </Footer>
    </Layout>
  );
}

export default App;
