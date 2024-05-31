import LoginForm from '@/app/(auth)/login/loginForm';

export default function Login() {
  return (
    <div className="flex flex-col w-full gap-8">
      <h2 className="text-3xl font-semibold text-center">Sign In</h2>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
