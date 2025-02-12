export function studentsBirthDays(students) {

    students.sort((a, b) => new Date(b.birthDate) - new Date(a.birthDate));


    const groupedByMonth = students.reduce((acc, { name, birthDate }) => {
        const month = new Date(birthDate).toLocaleString('en', { month: 'long' });

        if (!acc[month]) {
            acc[month] = [];
        }

        acc[month].push(name);
        return acc;
    }, {});

    return groupedByMonth;
}
