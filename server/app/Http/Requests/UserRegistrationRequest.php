<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'input.name' => 'required|string|max:255',
            'input.email' => 'required|string|email|max:255',
            'input.phone' => 'required|string|phone|max:255',
            'input.bank_acount' => 'required|string|size:16',
            'input.password' => 'required|string|max:255|min:5',
        ];
    }
}
