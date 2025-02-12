export function studentsBirthDays(students) {

    const sortedStudents = [...students];


    sortedStudents.sort((a, b) => {
        const dayA = Number(a.birthDate.split('/')[1]);
        const dayB = Number(b.birthDate.split('/')[1]);
        return dayA - dayB;
    });

    const groupedByMonth = sortedStudents.reduce((acc, { name, birthDate }) => {

        const monthNum = birthDate.split('/')[0];
        const monthNames = {
            '01': 'Jan', '02': 'Feb', '03': 'Mar',
            '04': 'Apr', '05': 'May', '06': 'Jun',
            '07': 'Jul', '08': 'Aug', '09': 'Sep',
            '10': 'Oct', '11': 'Nov', '12': 'Dec'
        };
        const month = monthNames[monthNum];

        if (!acc[month]) {
            acc[month] = [];
        }

        acc[month].push(name);
        return acc;
    }, {});

    return groupedByMonth;
}
