import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <section className="auth">
                <figure className="auth__figure"></figure>
                <form action="" className="auth__form">
                    <h2 className="auth__form--title">Login</h2>
                    <span className="auth__form--wrapper">
                        <input type="text" name="email" value={data.email} onChange={(event) => setData('email', event.target.value)} className="auth__form--input" />
                        <input type="password" name="password" value={data.password} onChange={(event) => setData('password', event.target.value)} className="auth__form--input" />
                        <span className="auth__form--remember">
                            <input type="checkbox" name="remember" checked={data.remember} onChange={(event) => setData('remember', event.target.value)} className="auth__form--remember-checkbox" />
                            <label className="auth__form--remember-label">Remember me</label>
                        </span>
                    </span>
                    <span className="auth__form--links">
                        <button className="auth__form--submit">Login</button>
                    </span>
                </form>
            </section>
        </GuestLayout>
    );
}
