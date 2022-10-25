import React, { Component} from 'react';
import { Editor } from '@tinymce/tinymce-react'; 
  
var arrImg = []

  class Tiny extends Component {
    state = {
      id:"",
      title : "",
      titleTiny:"",
      contentTiny:""
      

    }
    componentDidUpdate() { //nhan props de set lai state
      if(this.state.id !== this.props.id){
        this.setState({
          id : this.props.id,
          titleTiny : this.props.title,
          contentTiny : this.props.content 
        })
      }
    }
    isChange = (e,id) => {
      let copyState = {...this.state}
      copyState[id] = e.target.value
      this.setState({
        ...copyState
      })

    }
    handleClear = () => {
      this.setState({
        contentTiny : "",
        title : "",
        titleTiny : ""
      })
    }
     render() {
      console.log(this.props , 'tiny');
        return (
        
            <div>
                <input onChange={(e) => this.isChange(e , "title")} value={this.state.title}/>
                <button onClick={() => this.props.addItem({content : this.state.contentTiny   , title : this.state.title , arrImg : arrImg },
                  this.handleClear()
                  )}>ADD</button>


                <input onChange={(e) => this.isChange(e , "titleTiny")} value={this.state.titleTiny}/>
                <button onClick={() => this.props.updateItem({id : this.state.id ,content  : this.state.contentTiny , title : this.state.titleTiny  } , this.handleClear())}>UPDATE</button>


             
             <Editor
               onEditorChange={(value) => { this.setState({ contentTiny: value }) }}
               value={this.state.contentTiny}
               
             apiKey='hol4jp4apv6zee3fsm0k0bj2r6b2q1u4xykila3v9pmzx91b'
         init={{
           height: 500,
           width : 800,
           menubar: false,   
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount image'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help image',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px  }',
           images_upload_handler: async function (blobInfo, success, failure) {
            return new Promise((resolve, reject) => {
                let form = new FormData()
                const url = `http://localhost:3001/item`
                form.append('img', blobInfo.blob())
                fetch(url, {
                    method: 'POST',
                    body: form
                })
                    .then((response) => response.json())
                    .then((res) => {
                        resolve(res)
                        success(res.arrPicture[0])
                         arrImg = (res.arrImg)
                        
                    })
                    .catch((err) => {
                        reject(err)
                        failure('loi anh')
                    })
            })
        }
         }}
       />
 
 
            </div>
        );
    }
  }
  
  export default Tiny;