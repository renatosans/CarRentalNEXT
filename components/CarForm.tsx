import styles from '../styles/CarForm.module.scss'
import { useState, FormEvent } from 'react'
import { carType } from '../utils/types'
import { notification } from '../utils/notification'
import toast, { Toaster, ToastOptions } from 'react-hot-toast'


export const CarForm = ({parentRef}: any) => {

	const [car, setCar] = useState<carType>({
        brand: "",
        model: "",
        year:  2000,
        img: "",
        description: "",
        category: "",
        rentalPrice: 0,
	})

    const [image, setImage] = useState({
        imageFormat: "",
        imageData: "",
    });

    const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (car.brand === "" || car.model === "" || car.description === "" || car.rentalPrice === 0) {
			toast.error('Favor preencher todos os campos!', notification.options as ToastOptions);
			return;
		}

        const payload = {...car, ...image};

        fetch(`/api/cars`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(payload), })
        .then((response) => {
            if(response.ok)
            {
                toast.success('Registro salvo com sucesso', notification.options as ToastOptions);
                parentRef.getCars();  // faz o refresh da lista de veículos
                parentRef.toggle();
                return;
            }

            throw new Error(response.statusText);
        })  
        .then((text) => {
            console.log(text);
        })  
        .catch((error: any) => {
            toast.error(error.message, notification.options as ToastOptions);
        })
    }

	const onChange = (e: any) => {
		if (e.target.type === 'file') {
			const file = e.target.files[0];
			// Reads the file using the FileReader API
			const reader = new FileReader();
			reader.onloadend = () => {
				const fileData = reader.result.split(';base64,');
				let formato = fileData[0].replace('data:', '') + ';base64';
                setImage({imageFormat: formato, imageData: fileData[1]});
			}
			reader.readAsDataURL(file);
		}

        setCar({...car, [e.target.name]: e.target.value, });
	}

    return (
    <>
        <Toaster />
        <form onSubmit={handleSubmit} className={styles.form} >
            <label htmlFor="brand" className={styles.label} >Marca</label>
            <input type="text" className={styles.input} name="brand" value={car.brand} onChange={onChange} />
            <label htmlFor="model" className={styles.label} >Modelo</label>
            <input type="text" className={styles.input} name="model" value={car.model} onChange={onChange} />
            <label htmlFor="description" className={styles.label} >Descrição</label>
            <input type="text" className={styles.input} name="description" value={car.description} onChange={onChange} />
            <label htmlFor="rentalPrice" className={styles.label} >Diária</label>
            <input type="text" className={styles.input} name="rentalPrice" value={car.rentalPrice} onChange={onChange} />

            <label htmlFor="img" className={styles.label} >Foto</label>
            <div className={styles.fileDialog}>
                <input type="file" name="img" accept=".gif,.jpg,.jpeg,.png" onChange={onChange} />
                <img style={{'width':'100%'}} src={"data:" + image.imageFormat + ", " + image.imageData} alt={"car photo"}></img>
            </div>

            <button type="submit" className={styles.button}>Salvar</button>
        </form>
    </>
    )
}

export default CarForm
