export function studentsBirthdays(students) {

    students.sort((a, b) => new Date(a.birthDate) - new Date(b.birthDate));


    return students.map(({ name, birthDate }) => 
        `name: ${name}, birthDate: ${birthDate}`
    );
}
