import { Email, Item, Span, Box, Image } from 'react-html-email'
import QRCode from '../QRCode/GenerateQR_Image'

const emailHTML = (props) => (
    <Email title="Hello">
        <Item>
            Chào bạn { props.name },<br/>
            Chào mừng bạn đến với hệ thống tích điểm H&M của chúng tôi !
            <hr/>
            Đây là mã QR code của bạn, hãy sử dụng khi tích điểm ở cửa hàng<br/>
            Thanks!
        </Item>
    </Email>
)
export default emailHTML;
