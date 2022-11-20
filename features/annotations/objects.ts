const profile = {
  userName: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Use ES2015 destructuring
// const { age } = profile;
// or
// const { age }: { age: number } = profile;
// const { age }: number = profile; // Wrong
// const { age, name }: number = profile; // Wrong

// { age: number; name: string } is the structure of profile;
const { age, userName }: { age: number; userName: string } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
