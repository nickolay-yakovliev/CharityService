﻿using System.Collections.Generic;

namespace CharityService.Models
{
    public class Project
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }

        public int FoundationId { get; set; }

        public virtual Foundation Foundation { get; set; }

        public IEnumerable<ProjectCategory> Categories { get; set; }
    }
}
