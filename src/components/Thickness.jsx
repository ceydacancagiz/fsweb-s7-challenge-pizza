import { Input } from 'reactstrap';

export default function Thickness(props){
    const {form,thickness,errors,handleChange}=props;

    return(
        <>
            <Input 
                name='thickness'
                className='gray-text'
                type='select' 
                value={form.thickness} 
                onChange={handleChange}
                style={{backgroundColor:'#faf7f2'}}
                >
                {thickness.map((item, index) => (
                <option key={index}>{item}</option>
                ))}
            </Input>
        </>
    )

}