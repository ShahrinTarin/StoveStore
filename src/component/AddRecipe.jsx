import React, { use } from 'react';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';


const AddRecipe = () => {
    const { user } = use(AuthContext);
    const handleAddRecipe = (e) => {
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form);
        const categories = formData.getAll('categories');

const bdTime = new Date().toLocaleString('en-GB', {
      timeZone: 'Asia/Dhaka',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).replace(',', '');


        const newRecipe = {
            ...Object.fromEntries(formData.entries()),
            categories,
            likes: 0,
            userId: user?.uid || null,
            email: user?.email || null,
            createAt:bdTime
        };


        // send recipe data to the db 
        fetch('https://assignment-10-server-blond-ten.vercel.app/recipe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Recipe added Successflly!",
                        icon: "success",
                        draggable: true,
                        timer:1500
                    });
                }
            })
        form.reset()
    }

    return (

        <div>
            <Navbar></Navbar>

            <div className='my-12 w-11/12 mx-auto'>
                <div className='mb-8 text-center space-y-4'>
                    <h1 className="text-5xl font-medium mb-5 dark:text-gray-300 text-gray-700">Add Your Toothsome Recipe</h1>
                    {/* <p className='font font-light text-[12px]'>Share your Recipe .</p> */}
                </div>
                <form onSubmit={handleAddRecipe} className='bg-blue-100 rounded-2xl shadow-2xl p-8 w-11/12 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 '>

                        <fieldset className="fieldset bg-blue-100 border-none w-full border p-4">
                            <label className="label text-lg text-gray-700 dark:text-gray-700">Title</label>
                            <input name='title' type="text" className="input text-gray-700 dark:text-gray-700 w-full bg-white" placeholder="Enter Title" required />
                        </fieldset>

                        <fieldset className="fieldset bg-blue-100  border-none w-full border p-4">
                            <label className="label text-lg text-gray-700 dark:text-gray-700">Ingredients</label>
                            <input name='ingredients' type="text" className="input text-gray-700 dark:text-gray-700 w-full bg-white" placeholder="Enter Recipe Ingredients" required />
                        </fieldset>

                        <fieldset className="fieldset bg-blue-100  border-none w-full border p-4">
                            <label className="label text-lg text-gray-700 dark:text-gray-700">Preparation Time</label>
                            <input name='time' type="number" className="input text-gray-700 dark:text-gray-700 w-full bg-white" placeholder="Recipe Preparation Time" required />
                        </fieldset>

                        <fieldset className="fieldset bg-blue-100 border-none w-full p-4">
                            <label className="label text-lg text-gray-700 dark:text-gray-700">Cuisine Type</label>
                            <select
                                name='cuisine'
                                className="w-full  bg-white p-2.5 rounded input text-gray-400  appearance-none pr-8"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml;utf8,<svg  height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 10px center',
                                }}
                            >
                                <option value="Italian">Italian</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Indian">Indian</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Arabian">Arabian</option>
                            </select>
                        </fieldset>

                        <fieldset className="fieldset bg-blue-100  border-none w-full border p-4">
                            <label className="label text-lg text-gray-700 dark:text-gray-700">Instructions</label>
                            <input name='instructions' type="text" className="input text-gray-700 dark:text-gray-700 w-full bg-white" placeholder="Enter Recipe Instructions" required />
                        </fieldset>

                        <fieldset className="fieldset bg-blue-100  border-none w-full border p-4">
                            <label className="label text-lg text-gray-700 dark:text-gray-700">Image</label>
                            <input name='image' type="text" className="input w-full text-gray-700 dark:text-gray-700 bg-white" placeholder="Enter photo URL" required />
                        </fieldset>


                    </div>
                    <fieldset className="fieldset bg-blue-100 border-none w-full p-4 md:col-span-2">
                        <label className="label text-lg text-gray-700 dark:text-gray-700">Categories</label>
                        <div className="flex flex-wrap text[14px] gap-4">
                            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-700">
                                <input
                                    type="checkbox"
                                    name="categories"
                                    value="Breakfast"
                                    className="checkbox  bg-white dark:bg-gray-400 checked:border-blue-500 checked:bg-blue-400 checked:text-blue-800"
                                />
                                Breakfast
                            </label>
                            <label className="flex items-center gap-2  text-gray-700 dark:text-gray-700">
                                <input
                                    type="checkbox"
                                    name="categories"
                                    value="Lunch"
                                    className="checkbox bg-white dark:bg-gray-400 checked:border-blue-500 checked:bg-blue-400 checked:text-blue-800"
                                />
                                Lunch
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-700">
                                <input
                                    type="checkbox"
                                    name="categories"
                                    value="Dinner"
                                    className="checkbox bg-white dark:bg-gray-400 checked:border-blue-500 checked:bg-blue-400 checked:text-blue-800"
                                />
                                Dinner
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-700">
                                <input
                                    type="checkbox"
                                    name="categories"
                                    value="Dessert"
                                    className="checkbox bg-white dark:bg-gray-400 checked:border-blue-500 checked:bg-blue-400 checked:text-blue-800"
                                />
                                Dessert
                            </label>
                            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-700">
                                <input
                                    type="checkbox"
                                    name="categories"
                                    value="Vegan"
                                    className="checkbox bg-white dark:bg-gray-400 checked:border-blue-500 checked:bg-blue-400 checked:text-blue-800"
                                />
                                Vegan
                            </label>
                        </div>
                    </fieldset>

                    <div className="fieldset  bg-blue-100 border-none w-full p-4 md:col-span-2 font-semibold ">
                        <p className="text-lg text-gray-700">Likes: 0</p>
                    </div>

                    <button type='submit' className="cursor-pointer px-5 py-2.5 lg:mt-5 relative rounded group text-white font-medium inline-block w-full text-center">
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-gray-600 to-blue-500"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-gray-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-gray-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-gray-600 from-blue-500"></span>
                        <span className="relative">Add Recipe </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;