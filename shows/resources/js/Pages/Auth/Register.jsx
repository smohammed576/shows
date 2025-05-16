import GuestLayout from '@/Layouts/GuestLayout';
import { useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return(
        <GuestLayout>
            <section className="auth">
                <figure className="auth__figure"></figure>
                <form onSubmit={submit} className="auth__form">
                    <h2 className="auth__form--title">Register</h2>
                    <span className="auth__form--wrapper">
                        <input type="text" name="name" value={data.name} onChange={(event) => setData('name', event.target.value)} placeholder="Name" required className="auth__form--input" />
                        <input type="text" name="email" value={data.email} onChange={(event) => setData('email', event.target.value)} placeholder="Email" required className="auth__form--input" />
                        <input type="password" name="password" value={data.password} onChange={(event) => setData('password', event.target.value)} placeholder="Password" required className="auth__form--input" />
                        <input type="password" name="password_confirmation" value={data.password_confirmation} onChange={(event) => setData('password_confirmation', event.target.value)} placeholder="Password confirmation" required className="auth__form--input" />    
                    </span>
                    <span className="auth__form--links">
                        <button type="submit" className="auth__form--submit">Register</button>
                        <a href={route('login')} className="auth__form--link">Already registered?</a>
                    </span>
                </form>
            </section>
        </GuestLayout>
    );
}
