export default function Footer() {
    return (
        <footer className="bg-complementary p-4 text-center text-white">
            &copy; {new Date().getFullYear()} Your App. All rights reserved.
        </footer>
    );
}