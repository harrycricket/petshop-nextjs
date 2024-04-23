import RegisterForm from '@/app/(auth)/register/registerForm';

export default function Register() {
  return (
    <div className="flex flex-col w-full gap-8">
      <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
      <div className='flex justify-center'>
        <RegisterForm />
      </div>
    </div>
  );
}
