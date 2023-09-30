import Link from 'next/link';

interface companiesInterface {
    id: number;
    name: string;
    logoSrc: string;
}

export default function companies() {
    const companiesData: companiesInterface[] = [
        {
            id: 1,
            name: 'Company-A',
            logoSrc: 'https://i.pinimg.com/originals/ce/d6/6e/ced66ecfc53814d71f8774789b55cc76.png',
        },
        {
            id: 2,
            name: 'Company-B',
            logoSrc: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
        },

    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold">Corporate Listings</h2>
            <div className="grid grid-cols-3 gap-4">
                {companiesData.map((companyData: companiesInterface) => (
                    <Link key={companyData.id} href={`/companies/${companyData.name}`}>
                        <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 group">
                            <img
                                src={companyData.logoSrc}
                                alt={`${companyData.name} Logo`}
                                className="w-16 h-16 mx-auto mb-2 rounded-lg shadow-lg group-hover:shadow-gray-500/50"
                            />
                            <h3 className="text-lg font-semibold text-center">{companyData.name}</h3>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    )
}