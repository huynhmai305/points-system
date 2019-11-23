import { Component } from 'react'
import dynamic from 'next/dynamic'
const CKEditor = dynamic(() => import('../components/editor/Editor'), {
  ssr: false
})
class ComponentAttempt extends Component {
  static getInitialProps({ req, query }) {
    return {}
  }
  render() {
    return <div>
      <CKEditor 
        data="Some Default Data" 
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log(data)
        } }
      />
    </div>
  }
}
export default ComponentAttempt
