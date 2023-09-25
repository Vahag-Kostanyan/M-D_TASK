export const randomKey = () : string => {
      // Generate a random number and convert it to a string
      console.log();
      
    return Math.random().toString(36).substring(2);
}