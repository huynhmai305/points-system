import { Email, Item, Span, Box, Image } from 'react-html-email'
import QRCode from '../QRCode/GenerateQR_Image'

const emailHTML = (props) => (
    <Email title="Hello">
        <Item>
            <Span fontSize={20}>
                Chào bạn { props.name },
            </Span>
        </Item>
        <Item>
            <Span fontSize={20}>
                Chào mừng bạn đến với hệ thống tích điểm H&M của chúng tôi !
            </Span>
        </Item>
        <Item>
            <Box cellSpacing={20} width="100%" style={{ borderTop: '3px solid black' }}>
                <Span>Đây là mã QR code của bạn, hãy sử dụng khi tích điểm ở cửa hàng</Span>
                <Image src= "cid:myqr" alt="QR code"/>
            </Box>
        </Item>
        <Item>Thanks!</Item>
    </Email>
)
export default emailHTML;