import {Card, Typography, Collapse} from 'antd'
import { CardContainer, TextContent } from './Card.styles'

import Image from "next/image"
import { Health } from '../Health/Health'

const {Text} = Typography

export const AssetCard = ({name, status, img, model, sensors}) => {
    //criar badge de status
    //criar 
    return (
    <Card title={<a>{name}</a>} extra={`status: ${status}`} style={{width: 700}}>
        <CardContainer>
        <TextContent>
            <Text>Model: {model}</Text>
            <Text>Sensors: {sensors}</Text>
        </TextContent>
        <Image src={img} alt={name} width={250} height={200}/>
            <Health/>
       
       
        </CardContainer>
    </Card>)
}