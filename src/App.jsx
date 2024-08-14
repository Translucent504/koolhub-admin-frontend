import { Layout } from "antd";
const { Header, Content, Sider, Footer } = Layout;

function App() {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header></Header>
        <Layout>
          <Sider width={200}></Sider>
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: "lightgray",
            }}
          ></Content>
        </Layout>
        <Footer style={{ background: "yellow" }}></Footer>
      </Layout>
    </>
  );
}

export default App;
