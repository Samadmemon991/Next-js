'use client';
import { useRouter } from "next/navigation";

const employeesData = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Engineering',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Product Manager',
    department: 'Product Management',
  },
];

interface employee {
  id: number,
  name: string,
  position: string,
  department: string,
}

export default function employees({ params }: { params: { company: string } }) {
  const company = params.company;
  const router = useRouter();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Employees at {company}</h2>
      <table className="min-w-full table-auto text-center">
        <thead>
          <tr className="bg-primary text-white">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Position</th>
            <th className="py-2 px-4">Department</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee: employee) => (
            <tr
              key={employee.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => router.push(`/companies/${company}/employees/${employee.id}`)}
            >
              <td className="py-2 px-4">{employee.name}</td>
              <td className="py-2 px-4">{employee.position}</td>
              <td className="py-2 px-4">{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

