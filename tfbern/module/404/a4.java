//Aufgabe 4
//Sandro Volery
//15. Mai, 2019
import java.util.Scanner;
public class a4{

	public static void main(String[] args){

		Scanner neueZahl = new Scanner(System.in);
		System.out.println("Geben sie ihre neue zahl ein");

		int zahl = Integer.parseInt(neueZahl.next());


		System.out.println("Die anzahl stellen sind: " + anzahlStellen(zahl));

	}

	static int anzahlStellen(int zahl){

		int Count = 0;

		if(zahl < 0){
			zahl = zahl * -1;
			}

		while(zahl > 0) {
			zahl = zahl / 10;
			Count = Count + 1;
		}

			return Count;
		}
}