import { Email, Item, Span, A } from 'react-html-email'
import QRCode from '../QRCode/GenerateQR'

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
            Đây là mã QR code của bạn, hãy sử dụng khi tích điểm ở cửa hàng
            <QRCode data={props.email}/>
        </Item>
    </Email>
)
export default emailHTML;