//Aufgabe 2
//Sandro Volery
//15. Mai, 2019
import java.util.Scanner;

public class a2{
	public static void main(String[] args){

			Scanner doubleScanner = new Scanner(System.in);
			System.out.println("Geben sie zahl 1 ein:");
			double d1 = Double.parseDouble(doubleScanner.next());
			System.out.println(d1);

			System.out.println("Geben sie zahl 2 ein:");
			double d2 = Double.parseDouble(doubleScanner.next());
			System.out.println(d2);

			System.out.println("Geben sie zahl 3 ein:");
			double d3 = Double.parseDouble(doubleScanner.next());
			System.out.println(d3);


			double [] doubles = new double[3];
			doubles[0] = d1;
			doubles[1] = d2;
			doubles[2] = d3;
			System.out.println(doubles[0]);
			System.out.println(doubles[1]);
			System.out.println(doubles[2]);

			double result = doubles[0];
			for (int i = 1; i < 3; i++){

				result = result * doubles[i];

				}

			System.out.println(result);

		}
}