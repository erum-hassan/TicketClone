import { List, Avatar, Skeleton, Divider,Space,Typography ,Checkbox} from 'antd';
import Item from 'antd/lib/list/Item';
import React, { useEffect, useState } from 'react';

const { Text, Link,Title } = Typography;



function Ticket() {
  const [datainit, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/tickets").then((result) => {
      result.json().then((respnse) => {
        setData(respnse)

      })
    })
  }, [])
  return (
    <>

      {
        datainit.map((resp) => {
          return (
            <>
            <List itemLayout="horizontal" bordered>
              <List.Item>
              <List.Item.Meta
          
          title={<Title mark  level={2}>#{resp.id}&nbsp;{resp.name}</Title>}
         
          description={<Title keyboard  level={2}>{resp.issue}</Title>}
          
        />
              </List.Item>
            </List>
            </>
          )
        })
      }


    </>
  )
}
export default Ticket;