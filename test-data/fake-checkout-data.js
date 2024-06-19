import { faker } from '@faker-js/faker';
export function createFakeCheckoutData() {
    console.log('Generating fake checkout data');
    const firstName = faker.person.firstName();
    console.log(firstName);
    const lastName = faker.person.lastName();
    console.log(lastName);
    const zipCode = faker.location.zipCode();
    console.log(zipCode);
    return {
        firstName,
        lastName,
        zipCode,
    }
    console.log(firstName, lastName, zipCode);
}
