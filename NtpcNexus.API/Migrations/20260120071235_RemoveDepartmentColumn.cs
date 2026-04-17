using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NtpcNexus.API.Migrations
{
    /// <inheritdoc />
    public partial class RemoveDepartmentColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Department",
                table: "UserSubmissions");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Department",
                table: "UserSubmissions",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);
        }
    }
}
