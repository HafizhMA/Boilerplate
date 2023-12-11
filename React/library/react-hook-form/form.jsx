import { useForm } from "react-hook-form"

export default function Form() {
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm()

     const onSubmit = (data) => console.log(data) // check data

     return (
          <form onSubmit={handleSubmit(onSubmit)}>
               <input {...register("exampleRequired", { required: true })} />
               {errors.exampleRequired && <span>This field is required</span>}

               <button type="submit">Submit</button>
          </form>
     )
}