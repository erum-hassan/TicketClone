import { Layout, Menu ,Breadcrumb} from 'antd';
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Ticket from './Ticket';


const { SubMenu, Item, ItemGroup } = Menu;

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
function Dashboard() {

  return (

    <Layout style={{ height: '100vh' }}>
      <Header style={{ height: '8em', padding: '20px' }}>
        <Avatar style={{ float: 'right' }} shape="square" size={64} icon={<UserOutlined />} />
        <Title level={1} style={{ color: 'white' }}>Dashboard</Title>
      </Header>
      <Layout >
        <Sider width={500}>
          <Menu  >
            <Menu.Item style={{ height: '80px' }}><h2 style={{ fontSize:'40px',textAlign:'center',paddingTop:'20px'}}>Tickets</h2></Menu.Item>

          </Menu>
        </Sider>
        <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <h1 style={{fontSize:'5em'}}>
            Tickets
          </h1>
         <Ticket/> 
     
        </Content>
      </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>



  )
}
export default Dashboard;