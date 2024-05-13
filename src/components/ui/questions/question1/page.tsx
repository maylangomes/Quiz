import React from 'react';
import { Input } from "@/components/ui/input";

const InputQuestion1: React.FC<any> = ({ register, errors }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Question 1 : Nom du joueur NBA qui a mis le plus de 3 points sur une saison de l'histoire</h2>
      <p className='text-sm'>Indice : ce n'est pas Westbrook.</p>
      <Input type="text" {...register("question1")} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
      {errors.question1 && errors.question1.message?.toString()}
    </div>
  );
};

export default InputQuestion1;