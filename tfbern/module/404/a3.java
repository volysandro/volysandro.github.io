//Aufgabe 3
//Sandro Volery
//15. Mai, 2019
import java.util.Scanner;
public class a3{

	public static void main(String[] args){

		Sportart testsportart = new Sportart();
		testsportart.printSport();


	}
}


class Sportart{

	String setSport(){
		System.out.println("Geben sie ihre neue Sportart ein: ");
		Scanner setSportScanner = new Scanner(System.in);
		String newSportart = setSportScanner.next();
		return newSportart;
	}
	String sportart = setSport();

	void printSport(){
		System.out.println("Die sportart ist: " + sportart);
		}

	}