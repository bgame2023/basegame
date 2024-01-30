// Helper.ts
export default class Helper {
    // 1. Kiểm tra xem một giá trị có phải là số nguyên không
    public static isInteger(value: any): boolean {
      return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    }
  
    // 2. Định dạng số thành chuỗi với dấu phẩy phân cách hàng nghìn
    public static formatNumberWithCommas(number: number): string {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
    // 3. Chờ một khoảng thời gian cụ thể (sử dụng Promise)
    public static sleep(seconds: number): Promise<void> {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, seconds * 1000);
      });
    }
  
    // 5. Tạo chuỗi ngẫu nhiên với độ dài xác định
    public static generateRandomString(length: number): string {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
  
    // 6. Kiểm tra xem một mảng có phần tử trùng lặp hay không
    public static hasDuplicateElements(arr: any[]): boolean {
      return new Set(arr).size !== arr.length;
    }
  
    // 7. Chuyển đổi một chuỗi thành dạng title case
    public static toTitleCase(str: string): string {
      return str.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
    }
  

    // 9. Chuyển đổi giá trị từ độ sang radian
    public static degreesToRadians(degrees: number): number {
      return degrees * (Math.PI / 180);
    }
  
    // 10. Chuyển đổi giá trị từ radian sang độ
    public static radiansToDegrees(radians: number): number {
      return radians * (180 / Math.PI);
    }
  
    // 11. Loại bỏ các dấu diacritics (dấu thanh) trong một chuỗi
    public static removeDiacritics(str: string): string {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
  
    // 12. Lấy một giá trị ngẫu nhiên từ một mảng
    public static getRandomElementFromArray<T>(arr: T[]): T | undefined {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  
    // 13. Chuyển đối đối tượng Map thành đối tượng JSON
    public static mapToJSON(map: Map<any, any>): string {
      return JSON.stringify([...map]);
    }
  
    // 14. Lấy ngày đầu tiên của tháng hiện tại
    public static getFirstDayOfMonth(): Date {
      const currentDate = new Date();
      return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    }
  
    // 15. Lấy ngày cuối cùng của tháng hiện tại
    public static getLastDayOfMonth(): Date {
      const currentDate = new Date();
      return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    }
  
    // 16. Tính tổng các số trong một mảng
    public static sumArray(arr: number[]): number {
      return arr.reduce((total, num) => total + num, 0);
    }
  
    // 17. Chuyển đổi một số thành chuỗi tiền tệ (USD)
    public static formatCurrency(amount: number): string {
      return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
  
    // 18. Kiểm tra xem một chuỗi có phải là email hay không
    public static isEmailValid(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // 19. Tính tổng số lẻ trong một mảng
    public static sumOddNumbers(arr: number[]): number {
      return arr.filter((num) => num % 2 !== 0).reduce((total, num) => total + num, 0);
    }
  
    // 20. Kiểm tra xem một giá
}  