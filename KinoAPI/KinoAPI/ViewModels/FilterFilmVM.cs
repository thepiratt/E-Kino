namespace KinoAPI.ViewModels
{
    public class FilterFilmVM
    {

        public int Stranica { get; set; }
        public int BrojPoStranici { get; set; }

        //public PaginationVM PaginationVM
        //{
        //    get { return new PaginationVM() { Page=Stranica,RecordsPerPage=BrojPoStranici}; }
        //}
        public string Naslov { get; set; }
        public string Dan { get; set; }
        //public int KinoProjekcijaId { get; set; }


        public int ZanrId { get; set; }
        public bool Prikazuje_Se { get; set; }
        public bool Uskoro_se_prikazuje { get; set; }
    }
}
