import { Email, Item, Span, Box, Image } from 'react-html-email'

const emailHTML = (props) => (
    <Email title="Hello">
        <Box style={{ border: '2px dashed #ff0000',padding: '10px' }}>
            <Item>
                Chào bạn { props.name },<br/>
                Chào mừng bạn đến với hệ thống tích điểm H&M của chúng tôi !
                <hr/>
                Đây là mã QR code của bạn, hãy sử dụng khi tích điểm ở cửa hàng.<br/>
                Trân trọng !
            </Item>
        </Box>
    </Email>
)
export default emailHTML;
