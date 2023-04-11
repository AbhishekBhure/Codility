
public class PermMissingElement {
    public int solution(int[] A) {
        int SumOfAcctualArray = 0;
        int n = A.length + 1;

        int ArthematicProgression = (n / 2) * (1 + n);

        for (int j = 0; j < A.length; j++) {
            SumOfAcctualArray = SumOfAcctualArray + A[j];
        }
        return ArthematicProgression - SumOfAcctualArray;

    }

    public static void main(String args[]) {
        PermMissingElement PE = new PermMissingElement();
        System.out.println(PE.solution(new int[]{1, 2, 3, 4, 6}));

    }
}
