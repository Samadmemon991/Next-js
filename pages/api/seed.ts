import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message: string
}

const prisma = new PrismaClient();


export default async function seed(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    await prisma.employee.deleteMany({});
    await prisma.company.deleteMany({});



    const companies = [
        {
            name: 'Netflix',
            logoSrc: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
        },
        {
            name: 'Facebook',
            logoSrc: 'https://i.pinimg.com/originals/ce/d6/6e/ced66ecfc53814d71f8774789b55cc76.png',
        },
        {
            name: 'Amazon',
            logoSrc: 'https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1632523695',
        },
        {
            name: 'SystemsLtd',
            logoSrc: 'data:image/jpeg;base64,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',
        },
        {
            name: 'Tesla',
            logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
        },
        {
            name: 'Google',
            logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
        },
    ];


    for (const companyData of companies) {
        await prisma.company.create({
            data: companyData,
        });
    }

    const companiesData = await prisma.company.findMany();


    // Netflix employees

    const netflixId = companiesData.find((companyData) => companyData.name === 'Netflix')?.id || 1

    let employees = [
        {
            name: 'Greg Peters',
            position: 'CEO',
            department: 'Administration',
            companyId: netflixId,
            imgSrc: "https://s22.q4cdn.com/959853165/files/images/leadership/Greg-Peters_0094_Final.jpg"
        },
        {
            name: 'Eduardo Fuentes Martinez',
            position: 'Software Engineering Manager',
            department: 'Administration',
            companyId: netflixId,
            imgSrc: "https://media.licdn.com/dms/image/C4D03AQGa0mxwPMqD1w/profile-displayphoto-shrink_400_400/0/1622606226542?e=1701302400&v=beta&t=xOrNowxPwgUHFMQUylX0jYMcAcl8OUTyN6Uwx_WPl0s"
        },
        {
            name: 'Nataliya Pasichnyk',
            position: 'Engineering Manager',
            department: 'Frontend ',
            companyId: netflixId,
            imgSrc: "https://media.licdn.com/dms/image/D4D03AQHYu0OfkgvxaQ/profile-displayphoto-shrink_400_400/0/1693553739378?e=1701302400&v=beta&t=hgMLUddSA8SvSfLAcuCVhkLVW6yRgxnW5_rKruudJkE"
        },
        {
            name: 'Aaron Ponoroff',
            position: 'Product Manager',
            department: 'Games - Social Platform',
            companyId: netflixId,
            imgSrc: "https://media.licdn.com/dms/image/C5603AQGYbnyI7-rxJg/profile-displayphoto-shrink_400_400/0/1532826380872?e=1701302400&v=beta&t=KFIyLXfhfdiGx4iXqVZjIdiIhEfmXlma-u03CZ_O2ag"
        },
    ];

    for (const employeeData of employees) {
        await prisma.employee.create({
            data: employeeData,
        });
    }

    console.log('Netflix data inserted successfully.');


    // Facebook employees

    const facebookId = companiesData.find((companyData) => companyData.name === 'Facebook')?.id || 1

    employees = [
        {
            name: 'Mark Zuckerberg',
            position: 'CEO',
            department: 'Administration',
            companyId: facebookId,
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
        },
        {
            name: 'Jia Zhou',
            position: 'Software Engineer',
            department: 'Development',
            companyId: facebookId,
            imgSrc: "https://media.licdn.com/dms/image/C5603AQGKeBSvw7Udwg/profile-displayphoto-shrink_400_400/0/1645762574787?e=1701302400&v=beta&t=eSUs7RAXvYfcCnfkqSlhvAz5IK1DR6MfkNQ_rpFHH0k"
        },
        {
            name: 'Aazib Safi Patoli',
            position: 'Software Engineer',
            department: 'Development',
            companyId: facebookId,
            imgSrc: "https://media.licdn.com/dms/image/C4E03AQGqkdiTgfgCug/profile-displayphoto-shrink_400_400/0/1621200914594?e=1701302400&v=beta&t=TSUoCs3ljHqLwPSBhbInQgYPTK8VUmQMz9lOjuHsSMc"
        },
        {
            name: 'Maksat A',
            position: 'Software Engineer',
            department: 'Development',
            companyId: facebookId,
            imgSrc: "https://media.licdn.com/dms/image/D5603AQEWOloWG1DFWA/profile-displayphoto-shrink_400_400/0/1693707960279?e=1701302400&v=beta&t=5ju1Jxd5zg0nGPr9H-61JqnyzQfiYjHfMgDgObKOkrE"
        },

    ];

    for (const employeeData of employees) {
        await prisma.employee.create({
            data: employeeData,
        });
    }

    console.log('Facebook data inserted successfully.');

    // Amazon employees

    const amazonId = companiesData.find((companyData) => companyData.name === 'Amazon')?.id || 1

    employees = [
        {
            name: 'Andy Jassy',
            position: 'CEO',
            department: 'Administration',
            companyId: amazonId,
            imgSrc: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR0v7O7PzcKCMG6cv90iP1FIM5Hm1KQiQz4Mr5hh82UPLZ4A_nNtLsYma5xFC6Md9PQ"
        },
        {
            name: 'Keenan Rahman',
            position: 'SDE 2',
            department: 'Amazon Web Services',
            companyId: amazonId,
            imgSrc: "https://media.licdn.com/dms/image/D5603AQF0Bjn_FKPLUg/profile-displayphoto-shrink_400_400/0/1676786758570?e=1701302400&v=beta&t=X1v5oq08fatISILqdIY-jgLfZRxh8BhuZFEClgYZwuA"
        },
        {
            name: 'Alina Shagidullina',
            position: 'HRBP ',
            department: 'HR',
            companyId: amazonId,
            imgSrc: "https://media.licdn.com/dms/image/C4D03AQHJ9cujtILJCQ/profile-displayphoto-shrink_400_400/0/1610782797596?e=1701302400&v=beta&t=RDSBYxPHW6OcIxTEzZYJzcBnTxrQGdLGOHWINdfGo-0"
        },
    ];

    for (const employeeData of employees) {
        await prisma.employee.create({
            data: employeeData,
        });
    }

    console.log('Amazon data inserted successfully.');

    // SystemsLtd employees

    const systemsLtdId = companiesData.find((companyData) => companyData.name === 'SystemsLtd')?.id || 1

    employees = [
        {
            name: 'Asif Peer',
            position: 'CEO',
            department: 'Administration',
            companyId: systemsLtdId,
            imgSrc: "https://media.licdn.com/dms/image/C4D03AQGlvHSg1A-HYA/profile-displayphoto-shrink_400_400/0/1656497449309?e=1701302400&v=beta&t=36KtEKKEwjjkIUInwTFf8_XLP1o16Rutmpbf1sKVdSk"
        },
        {
            name: 'Arif Zia',
            position: 'Vice President',
            department: 'CADM',
            companyId: systemsLtdId,
            imgSrc: "https://media.licdn.com/dms/image/C4D03AQHJmSEUSH3Y1A/profile-displayphoto-shrink_400_400/0/1628697856125?e=1701302400&v=beta&t=uzCuhm4_3bjmTkMjof1Yog5i8HiUXXIe0TiRTHDuWRY"
        },
        {
            name: 'Muzahir Ahmad',
            position: 'Vice President',
            department: 'Open Source',
            companyId: systemsLtdId,
            imgSrc: "https://media.licdn.com/dms/image/D4D03AQFIQmjyMij8vg/profile-displayphoto-shrink_400_400/0/1683394777541?e=1701302400&v=beta&t=LgrtuE-dq7CM2Vao4VwqABzpEmZycupDjRMBZVqfeqY"
        },
        {
            name: 'Abdul Samad',
            position: 'Associate Consultant',
            department: 'CADM - Open Source',
            companyId: systemsLtdId,
            imgSrc: "https://media.licdn.com/dms/image/C5603AQFtwRf9t9K_LQ/profile-displayphoto-shrink_800_800/0/1589144954762?e=2147483647&v=beta&t=N5FnsgulhsI9pK0y2ESLWPz5mXfzZAi2GeDb9_6dHxw"
        },
    ];

    for (const employeeData of employees) {
        await prisma.employee.create({
            data: employeeData,
        });
    }

    console.log('SystemsLtd data inserted successfully.');

    // Tesla employees

    const teslaId = companiesData.find((companyData) => companyData.name === 'Tesla')?.id || 1

    employees = [
        {
            name: 'Elon Musk',
            position: 'CEO',
            department: 'Administration',
            companyId: teslaId,
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/330px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
        },
        {
            name: 'Efe Özcan',
            position: 'Recruiter',
            department: 'HR',
            companyId: teslaId,
            imgSrc: "https://media.licdn.com/dms/image/C4E03AQF1ZUjqdve4nA/profile-displayphoto-shrink_400_400/0/1610962663083?e=1701302400&v=beta&t=BHcgqR_0faFOjPIcbahAJJAg16PNRHkZQkUZ-AoVMis"
        },
        {
            name: 'Sasha Munir',
            position: 'Controls Engineer',
            department: 'Engineering',
            companyId: teslaId,
            imgSrc: "https://media.licdn.com/dms/image/C5603AQEBgx4lqFGBSA/profile-displayphoto-shrink_400_400/0/1653186218807?e=1701302400&v=beta&t=xbOM309dFi4VOjV2StR8L1vfTVDxGKJbJ5IqtyuaJpU"
        },
        {
            name: 'Vicky Zarra',
            position: 'HR Lead',
            department: 'HR',
            companyId: teslaId,
            imgSrc: "https://media.licdn.com/dms/image/C5103AQE3a_zcqqil_g/profile-displayphoto-shrink_400_400/0/1517367646857?e=1701302400&v=beta&t=-Gi8DwGxZcMWPtbeRn6bqbRmSo8dAZ_N_Q0RFNpmfzs"
        },
        {
            name: 'Rissa Royal',
            position: 'Manager',
            department: 'HR',
            companyId: teslaId,
            imgSrc: "https://media.licdn.com/dms/image/C4D03AQE7teaTWsf8qQ/profile-displayphoto-shrink_400_400/0/1645040284637?e=1701302400&v=beta&t=Qm7h20eSRQsLR9W_IixpABI3-4ztjrjomj0I_mS-Hmc"
        },

    ];

    for (const employeeData of employees) {
        await prisma.employee.create({
            data: employeeData,
        });
    }

    console.log('Tesla data inserted successfully.');

    // Google employees

    const googleId = companiesData.find((companyData) => companyData.name === 'Google')?.id || 1

    employees = [
        {
            name: 'Sundar Pichai',
            position: 'CEO',
            department: 'Administration',
            companyId: googleId,
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_Pichai_%282023%29_cropped.jpg/656px-Sundar_Pichai_%282023%29_cropped.jpg"
        },
        {
            name: 'Arslan Waheed',
            position: 'Senior Software Engineer',
            department: 'Engineering',
            companyId: googleId,
            imgSrc: "https://media.licdn.com/dms/image/D4E03AQEmIYxALR1M4Q/profile-displayphoto-shrink_400_400/0/1689129025870?e=1701302400&v=beta&t=Q0_294Z35N5jcx5cw69JfNbmwJDf4e0pOZ0LSmnA-yk"
        },
        {
            name: 'Jessica Quinn',
            position: 'Recruiter ',
            department: 'HR',
            companyId: googleId,
            imgSrc: "https://media.licdn.com/dms/image/C4E03AQHb2xniboVtUw/profile-displayphoto-shrink_400_400/0/1537300778096?e=1701302400&v=beta&t=LgG1XbIHosw_9USHue5OC3wfcD-GZGUVut8W9Qaguso"
        },
        {
            name: 'Ali Asgher',
            position: 'Software Engineer',
            department: 'Engineering',
            companyId: googleId,
            imgSrc: "https://media.licdn.com/dms/image/D5603AQHLl3Jnvh_0pw/profile-displayphoto-shrink_400_400/0/1677183985469?e=1701302400&v=beta&t=4uWyUdPIY46-rvpW5PyKWWbFn7K3DPlF71ys4vyaL4Q"
        },
        {
            name: 'Hufsa Munawar',
            position: 'Growth Manager',
            department: 'AppSales',
            companyId: googleId,
            imgSrc: "https://media.licdn.com/dms/image/C4D03AQFx6BsbwX3UZw/profile-displayphoto-shrink_400_400/0/1648148084741?e=1701302400&v=beta&t=ZvSr7V-Wgeivqxq7Xo1UgyN2JpSHKYFyNdNPpQtdSrQ"
        },
    ];

    for (const employeeData of employees) {
        await prisma.employee.create({
            data: employeeData,
        });
    }

    console.log('Google data inserted successfully.');


    res.status(200).json({ message: "Data inserted" });
    // await prisma.$disconnect();

}
