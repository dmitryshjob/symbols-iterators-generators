export default function canIterate(object) {
    try {
        if (object[Symbol.iterator]) {
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
}