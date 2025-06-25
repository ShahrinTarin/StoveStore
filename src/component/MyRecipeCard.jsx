import React, { useEffect, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';


const MyRecipeCard = ({ recipe, handleDelete }) => {
    const [showFullInstructions, setShowFullInstructions] = useState(false);
    const [currentRecipe, setCurrentRecipe] = useState(recipe)
    const { _id, instructions, image, time, cuisine, categories, title, ingredients, likes } = currentRecipe
    const MAXINGREDINSTRUCTIONS = 250;


    const toggleIngredients = () => {
        setShowFullInstructions(!showFullInstructions);
    };

    const displayInstructions = () => {
        if (instructions.length <= MAXINGREDINSTRUCTIONS || showFullInstructions) {
            return instructions;
        }
        return `${instructions.substring(0, MAXINGREDINSTRUCTIONS)}...`;
    };

    useEffect(() => {
        setCurrentRecipe(recipe);
    }, [recipe]);

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form);
        const updatedCategories = formData.getAll('categories')
        const updatedRecipe = {
            title: formData.get('title'),
            ingredients: formData.get('ingredients'),
            time: formData.get('time'),
            cuisine: formData.get('cuisine'),
            instructions: formData.get('instructions'),
            image: formData.get('image'),
            categories: updatedCategories,
            likes: currentRecipe.likes
        };
        fetch(`https://assignment-10-server-blond-ten.vercel.app/recipe/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedRecipe)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setCurrentRecipe(updatedRecipe);
                    Swal.fire({
                        position: "top center",
                        icon: "success",
                        title: "Recipe Updated Successfully",
                        showConfirmButton: true,

                    });
                    document.getElementById('my_modal_4').close();

                }

            })

    }

    return (
        <div>
            <div className="card md:w-11/12 text-gray-600 dark:text-white mx-auto dark:bg-gray-700 bg-blue-50 shadow-sm mt-0">
                <figure className='w-full h-[300px]'>
                    <img src={image}
                        className='w-full h-full'
                        alt="recipe" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title text-2xl">{title}</h2>
                        <small className="badge dark:text-gray-700 text-gray-600 bg-blue-100 border-black items-center justify-center">{cuisine}</small>
                    </div>

                    <h2 className="text-lg"><span className='font-bold'>Preparation Time : </span>{time} Minute</h2>
                    <div className='flex flex-wrap gap-4'>
                        <span className='font-bold'>Category :</span> {
                            categories.map((category, index) => <small key={index} className="badge dark:text-gray-700 text-gray-600 bg-blue-100 border-black items-center justify-center">{category}</small>)
                        }
                    </div>
                    <p><span className='font-bold'>Ingredients : </span>{ingredients}</p>
                    <p><span className='font-bold'>Instructions : </span>{displayInstructions()}
                        {instructions.length > MAXINGREDINSTRUCTIONS && (
                            <button
                                onClick={toggleIngredients}
                                className="text-blue-600 hover:text-blue-300 ml-1 text-xs"
                            >
                                {showFullInstructions ? 'See Less' : 'See More'}
                            </button>
                        )}</p>
                    <div>
                        <p className="card-footer text-md mt-4 font-bold flex items-center gap-0.5">
                            <span className='text-blue-900'><AiFillLike size={18} /></span> {likes} People Like Your Recipe...
                        </p>
                        <div className="card-actions justify-end">

                            <button onClick={() => {
                                document.getElementById('my_modal_4').showModal();
                            }} className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue-900 group-hover:bg-blue-800"></span>
                                <span className="relative text-blue-900 group-hover:text-white cursor-pointer"><FaEdit size={20} />
                                </span>
                            </button>
                            <dialog id="my_modal_4" key={_id} className="modal ">
                                <div className="modal-box bg-gray-300 w-11/12 max-w-5xl">
                                    <div className='my-12 w-11/12 mx-auto'>
                                        <div className='mb-8 text-center space-y-4'>
                                            <h1 className="text-5xl font-medium mb-5 text-gray-700"> Update Your Recipe</h1>
                                            {/* <p className='font font-light text-[12px]'>Share your Recipe .</p> */}
                                        </div>
                                        <form onSubmit={handleUpdate} className='bg-blue-100 rounded-2xl shadow-2xl p-2 md:p-8 w-full md:w-11/12 mx-auto'>
                                            <div className='grid grid-cols-1 md:grid-cols-2 '>

                                                <fieldset className="fieldset bg-blue-100 border-none w-full border p-4">
                                                    <label className="label text-lg text-gray-700 dark:text-gray-700">Title</label>
                                                    <input defaultValue={currentRecipe.title} name='title' type="text" className="input text-gray-700 dark:text-gray-700 w-full bg-white" placeholder="Enter Title" required />
                                                </fieldset>

                                                <fieldset className="fieldset bg-blue-100  border-none w-full border p-4">
                                                    <label className="label text-lg text-gray-700 dark:text-gray-700">Ingredients</label>
                                                    <input defaultValue={currentRecipe. ingredients} name='ingredients' type="text" className="input text-gray-700 dark:text-gray-700 w-full bg-white" placeholder="Enter Recipe Ingredients" required />
                                                </fieldset>

                                                <fieldset className="fieldset bg-blue-100  border-none w-full border p-4">
                                                    <label className="label text-lg text-gray-700 dark:text-gray-700">Preparation Time</label>
                                                    <input defaultValue={currentRecipe. time} name='time' type="number" className="input text-gray-700 dark:text-gray-700 w-full bg-white" placeholder="Recipe Preparation Time" required />
                                                </fieldset>

                                                <fieldset className="fieldset bg-blue-100 border-none w-full p-4">
                                                    <label className="label text-lg text-gray-700 dark:text-gray-700">Cuisine Type</label>
                                                    <select defaultValue={currentRecipe. cuisine}
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
                                                    <input defaultValue={currentRecipe. instructions} name='instructions' type="text" className="input text-gray-700 dark:text-gray-700 w-full bg-white" placeholder="Enter Recipe Instructions" required />
                                                </fieldset>

                                                <fieldset className="fieldset bg-blue-100  border-none w-full border p-4">
                                                    <label className="label text-lg text-gray-700 dark:text-gray-700">Image</label>
                                                    <input defaultValue={currentRecipe.image} name='image' type="text" className="input w-full text-gray-700 dark:text-gray-700 bg-white" placeholder="Enter photo URL" required />
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

                                            <button type='submit' className="cursor-pointer px-5 py-2.5  relative rounded group text-white font-medium inline-block w-full text-center">
                                                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-gray-600 to-blue-500"></span>
                                                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-gray-600 to-blue-500"></span>
                                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-gray-600 to-blue-500"></span>
                                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-gray-600 from-blue-500"></span>
                                                <span className="relative">Update Recipe </span>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button, it will close the modal */}
                                            <button className="btn px-10">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                            <button onClick={() => handleDelete(_id)} className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue-900 group-hover:bg-blue-800"></span>
                                <span className="relative text-blue-900 group-hover:text-white cursor-pointer"><MdDeleteForever size={20} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyRecipeCard;